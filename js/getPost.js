async function getPosts() {

    try {
        const responses = await Promise.all([
            fetch('http://localhost:3000/0'),
            fetch('http://localhost:3000/1'),
            fetch('http://localhost:3000/2'),
            fetch('http://localhost:3000/3'),
            fetch('http://localhost:3000/4'),
        ]);
        if (responses.some(response => !response.ok)) {
            throw new Error("One or more requests failed");
        }
        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data)
    } catch (error) {
    
    console.error(error);
    
    }
    
    }
    export {
        getPosts
    }