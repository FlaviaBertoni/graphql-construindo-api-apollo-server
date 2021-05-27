const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000';
  }

  async getUsers() {
    const users = await this.get(`/users`);
    return users.map(async user => ({
      ...user,
      role: await this.getRole(user.role)
    }));
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`);
    return { ...user, role: await this.getRole(user.role) };
  }

  async getRole(id) {
    return await this.get(`/roles/${id}`);
  }

  async adicionaUser(user) {
    const users = await this.getUsers();
    const [role] = await this.get(`/roles?type=${user.role}`);
    
    user.id = users.length + 1;
    await this.post('users', { ...user, role: role.id });

    return ({ ...user, role})
  }

  async atualizaUser({ id, user }) {
    const [role] = await this.get(`/roles?type=${user.role}`);
    
    await this.put(`users/${id}`, { ...user, role: role.id });

    return ({ ...user, role})
  }

  async deletaUser(id) {    
    await this.delete(`users/${id}`);
    return id;
  }
}

module.exports = UsersAPI
