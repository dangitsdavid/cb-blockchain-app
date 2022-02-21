import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import Coin from './Coin'
import BalanceChart from './BalanceChart'

const Portfolio = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  // console.log(thirdWebTokens)
  console.log(sanityTokens)
  // console.log(walletAddress)

  const [walletBalance, setWalletBalance] = useState(0)
  const tokenToUSD = {}

  for (const token of sanityTokens) {
    tokenToUSD[token.contractAddress] = Number(token.usdPrice)
  }

  // Convert all tokens into USD value
  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdWebTokens.map(async token => {
          const balance = await token.balanceOf(walletAddress)
          return Number(balance.displayValue) * tokenToUSD[token.address]
        })
      )
      console.log(totalBalance, 'Total Balance')
      setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0))
    }

    return calculateTotalBalance()
  }, [thirdWebTokens, sanityTokens])


  // 0  Solana     0x58c0eCA2574AFcCc98933034BD6785cc6b53fed0
  // thirdWebTokens[0]
  //   .balanceOf(walletAddress)
  //   .then(balance => console.log(Number(balance.displayValue)))
  // 1  Curve      0xb267CBcfBBa6D0d2cf3BE563b523430005a5aAbA
  // 2  Ethereum   0xDF6fB44DE1775F4fEc550CCca75aaD63f18f8006
  // 3  Fantom     0x62dBafEEC0Af7CF8E64b8A4e1B778F8E06b9E420
  // 4  Polygon    0x441963e32fc54826AaA30127f6eF28DbE050C512
  // 5  Chainlink  0x8207C6d7d6A50e6cccaDC40d03121E921A73b1D5
  // 6  Bitcoin    0x581edff812bBe5aFb3Bc31978570bB020F33762D

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {'$'}
                {walletBalance.toLocaleString()}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map(coin => (
                <div key={coin.name}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`