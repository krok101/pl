interface rectanglesResponse {
  data: any
}

export async function getRectangles(): Promise<rectanglesResponse> {
  const data = await fetch(`http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd`)
  console.log(data)
  return await data.json();
}