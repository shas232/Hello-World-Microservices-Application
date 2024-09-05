const axios = require('axios');

// URLs for both services
const helloServiceUrl = 'http://localhost:1729/hello-world';
const worldServiceUrl = 'http://localhost:3000/world';

// Function to test hello-service
async function testHelloService() {
    try {
        const response = await axios.get(helloServiceUrl);
        console.log(`Hello Service Response: ${response.data}`);
    } catch (error) {
        console.error(`Error testing Hello Service: ${error.message}`);
    }
}

// Function to test world-service
async function testWorldService() {
    try {
        const response = await axios.get(worldServiceUrl);
        console.log(`World Service Response: ${response.data}`);
    } catch (error) {
        console.error(`Error testing World Service: ${error.message}`);
    }
}

// Test both services
async function testBothServices() {
    await testHelloService();
    await testWorldService();
}

testBothServices();
