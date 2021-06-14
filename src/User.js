export const userData = () => {
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve({
  id: "jhon@gmail.com",
  name: "Jhohn Doe",
  password: "1234",
    })}, 3000)
  })
}