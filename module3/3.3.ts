{
  // type guard usign typeOf & In


  // tuyeof --> type guard
  type Alphanemeric = string | number;
  const add = (param1: Alphanemeric, param2: Alphanemeric): Alphanemeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1+param2
    }
    else {
      return param1.toString() + param2.toString()
    }
  }
  const result1 = add("2", "3")
  console.log(result1);

  //in guard
  type NormarUser = {
    name:string
  }
  type AdminUser = {
    name: string;
    role: "admin"
  }
  const getUser = (user: NormarUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    }
    else {
        console.log(`My name is ${user.name}`);
    }
    
  }

  const normalUser: NormarUser = {
    name:"mukta"
  }
  const adminUser: AdminUser = {
    name: "Sudipto",
    role:"admin"
  }

  getUser(adminUser)

}