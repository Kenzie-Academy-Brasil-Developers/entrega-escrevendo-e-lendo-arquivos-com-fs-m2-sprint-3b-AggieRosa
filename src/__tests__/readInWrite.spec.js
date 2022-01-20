const request = require("supertest")
const app = require("../app.js")
const { resolve } = require("path")
const { readFileSync, writeFileSync, unlinkSync } = require("fs")

describe("Testes de leitura e escrita de arquivo com fs", () => {
    const path = resolve("src", "mock", "db.json")
    const pathFinalDb = resolve("src", "mock", "dbFake.json")

    beforeAll(() => {
      const dataRead = readFileSync(path)

      if (dataRead.length !== 0) {
        let dataJson = JSON.parse(dataRead)

        writeFileSync(pathFinalDb, JSON.stringify(dataJson, null, 2))
      } else {

        writeFileSync(pathFinalDb, "")
      }
    })

    afterAll(() => {
        let backupdb = readFileSync(pathFinalDb)

        if (backupdb.length !== 0) {
          let backupData = JSON.parse(backupdb)

          writeFileSync(path, JSON.stringify(backupData, null, 2))
          unlinkSync(pathFinalDb)
        } else {

          unlinkSync(pathFinalDb)
        }
    })

    test("se retorna um json após a criação", async () => {
        const result = await request(app).post("/api/create").send({
            name: "Kenzinho",
            course: "M2",
            age: 18,
            email: "example@mail.com.br"
          })
        
        const expectValue = {
            name: "Kenzinho",
            course: "M2",
            age: 18,
            email: "example@mail.com.br"
          }

        expect(result.body).toEqual(expectValue)

        writeFileSync("./src/mock/db.json", "")
    })

    test("se retorna status code 201 na criação", async () => {
      const result = await request(app).post("/api/create").send({
        name: "Kenzinho",
        course: "M2",
        age: 18,
        email: "example@mail.com.br"
      })

      expect(result.statusCode).toBe(201)

      writeFileSync("./src/mock/db.json", "")
    })

    test("se retorna uma list vazia", async () => {
        const result = await request(app).get("/api/list?page=1&perPage=3")
        const expectValue = []


        expect(result.body).toEqual(expectValue)
        expect(result.statusCode).toBe(200)
    })

    test("se retorna status code 200 na listagem dos itens", async () => {
      const result = await request(app).get("/api/list?page=1&perPage=3")
      const expectValue = []

      expect(result.statusCode).toBe(200)
    })

    test("se retorna um json com uma chave 'data' onde tem uma lista de itens", async () => {
        await request(app).post("/api/create").send({
            name: "Kenzinho",
            course: "M2",
            age: 18,
            email: "example@mail.com.br"
          })

        const result = await request(app).get("/api/list?page=1&perPage=3")
        const expectValue = {
          "page": 1,
          "previousPage": 0,
          "nextPage": 2,
          "data": [{
            name: "Kenzinho",
            course: "M2",
            age: 18,
            email: "example@mail.com.br"
          }]
        }

        expect(result.body).toEqual(expectValue.data)
        expect(result.statusCode).toBe(200)

        writeFileSync("./src/mock/db.json", "")
    })
})

