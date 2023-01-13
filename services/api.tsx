import axios, { AxiosInstance } from 'axios'

// Classic adapter pattern
class Api {
  private api: AxiosInstance
  constructor() {
    this.api = axios.create()
  }

  public get = async (url: string) => {
    const response = await this.api.get(url)
    return response
  }


  public post = async (url: string, data: any) => {
    const response = await this.api.post(url, data)
    return response
  }

}


export default new Api()