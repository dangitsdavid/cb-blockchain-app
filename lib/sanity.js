import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'j50a52hr',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk1FxIJCY7D0uFAK9AxseO5bj0UkPEKL0WKLky8D3mqVW5VxyJZyRtfoMwKeOEeVvL0TEegNeijSGIjKM7KiD4EX0SNXIa6KxeHZ8VoqL9nmZ4oWq7JJmRB8EAErlk8yWweoVtwegkCfFXtMski3clH9YM5vDWyNsYdMiB7qrDXTcy7tnjy4',
    usdCdn: 'false',
})