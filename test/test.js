const assert = require("power-assert");
const axios = require("axios");

describe("服务测试", () => {

  before(function() {
    this.server = require("../")
    const http = axios.create({
      baseURL: "http://localhost:3000/",
      data: {}
    })
  
    this.call = function(path, data = {}) {
      return http.post(path, data)
    }
  })

  it("/api/auth", async function () {
    const result = await this.call("api/auth")
    assert.deepEqual(result.data, {
      data: "hello world!"
    });
  })

  it('/api/auth/index', async function() {
    const result = await this.call("api/auth/index")
    assert.deepEqual(result.data, {
      data: "hello world!"
    })
  })

  after(function() {
    this.server.close()
  })
})
