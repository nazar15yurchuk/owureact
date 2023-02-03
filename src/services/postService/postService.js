import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs";

const postService = {
    getAll: () => axiosService.get(urls.posts)
}

export {
    postService
}