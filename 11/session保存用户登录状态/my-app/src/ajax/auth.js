import ajax from "./index";
export async function checkLogin() {
  try {
    await ajax.get("/api/user/check_login");
    return Promise.resolve(true);
  } catch (error) {
    return Promise.resolve(false);
  }
}
