const {
  getUserName,
} = require('./userData');

describe('Testes sem os matchers resolve/reject', () => {
  describe('Testes que tratam a promise', () => {
    it('A função getUserName deve retornar o nome correto', () => {
      expect.assertions(1);
      return getUserName(4).then((name) => {
        expect(name).toBe('Mark')
      });
    });
    it('A função getUserName deve retornar um erro caso o id não exista', () => {
      expect.assertions(1);
      return getUserName(7).catch((erro) => {
        expect(erro).toEqual({"error": "User with 7 not found."});
      });
    })
  })
  
  describe('Testes com async/await', () => {
    it('A função getUserName deve retornar o nome correto e retorar erro caso o id não exista', async () => {
      try {
        const name = await getUserName(4);
        expect(name).toBe('Mark');  
      } catch (erro) {
        expect(erro).toEqual({"error": "User with 7 not found."});
      }
    });
  });
});

describe('Testes com resolve/reject', () => {
  describe('Testes que tratam a promise', () => {
    it('A função getUserName deve retornar o nome correto', () => {
      return expect(getUserName(4)).resolves.toBe('Mark')
    });
    it('A função getUserName deve retornar um erro caso o id não exista', () => {
      return expect(getUserName(7)).rejects.toEqual({"error": "User with 7 not found."})
    })
  })
  describe('Testes com async/await', () => {
    it('A função getUserName deve retornar o nome correto', async () => {
      await expect(getUserName(4)).resolves.toBe('Mark')
    });
    it ('A função getUserName deve retornar um erro caso o id não exista', async () => {
      await expect(getUserName(7)).rejects.toEqual({"error": "User with 7 not found."})
    });
  });
});