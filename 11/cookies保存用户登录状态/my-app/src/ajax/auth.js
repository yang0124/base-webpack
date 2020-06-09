import ajax from "./index";
export async function checkLogin() {
  try {
    const response = await ajax.get("/api/user/check_login");
    console.log(response);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}
