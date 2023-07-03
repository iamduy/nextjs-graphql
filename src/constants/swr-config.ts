export const swrOptions = {
  fetcher: (url: string) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${url}`).then((res) =>
      res.json()
    ),
};
