/** @format */

import axios, { AxiosResponse } from "axios";
import { GetFilmResult } from "../result/GetFilmResult";
export class Api {
    instance = axios.create({
        baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
        headers: {
            "X-API-KEY": "23271c7c-c325-49b1-9827-8ce970583d5d",
            "Content-Type": "application/json"
        }
    });

    async getFilm(): Promise<AxiosResponse<GetFilmResult>> {
        const response = await this.instance.get("/films/405");
        return response.data;
    }
    async getPoster(): Promise<AxiosResponse<GetFilmResult>> {
        return await this.instance.get("/films/410").then((response) => {
            return response.data.posterUrl;
        });
    }
}
