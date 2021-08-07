import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com';

const getByPage = async (page, limit = 20) => {
    try {
        const response = await fetch(`${URL}/comments?_page=${page}&_limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }

}

const postComment = async (comment) => {
    try {
        const response = await axios.post('/test.steps.me/test/testAssignComment', comment)
        return (response);
    } catch (error) {
        console.log(error);
    }
}

export { getByPage, postComment }