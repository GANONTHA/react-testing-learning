import { AuthProvider, useContext } from "../provider/AuthContext";
import { useAuthContext } from "../provider/AuthContext";
import { mount, render } from "../../enzyme";

describe("AuthContext", () => {
  it("Should set isLoggedIn status to true", () => {
    const TestComponent = () => {
      const { login, isLoggedIn } = useAuthContext();

      return (
        <>
          <h1 data-testid="value">{isLoggedIn.toString()}</h1>
          <button onClick={login}>Login</button>
        </>
      );
    };
    const wrapper = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("true");
  });
});
