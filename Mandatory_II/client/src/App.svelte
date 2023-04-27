<script>
  import { Router, Link, Route } from "svelte-navigator";
  import LoginPage from "./pages/loginPage/loginPage.svelte";
  import Frontpage from "./pages/Frontpage/frontpage.svelte";
  import PrivateRoute from "./PrivateRoute.svelte";
  import SignupPage from "./pages/signuppage/SignupPage.svelte";
</script>

<Router>
  <Route path="/" component={LoginPage} />
  <PrivateRoute path="/frontpage" let:location>
    <Frontpage />
  </PrivateRoute>
  <Route path="/signup" component={SignupPage} />
</Router>

