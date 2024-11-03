import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: "1.0.0",
        title: "My user api",
        description: "Api Alex..."
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc)