# TODO

- [ ] project wil be name acme

- [x] set t3 env
- [x] supabase setup
  - [x] setup locally 

- [ ] [auth setup](https://supabase.com/docs/guides/auth/server-side/nextjs)
  - [ ] [supabase-auth-jwt](https://www.youtube.com/watch?v=rwnOal_xRtM)
  - [ ] google
    - [ ] enable config
    - [ ] test 
  - [ ] apple
  - [ ] email
- [ ] oauth
- [ ] password
  ```
  Be careful when protecting pages. The server gets the user session from the cookies, which can be spoofed by anyone.

  Always use supabase.auth.getUser() to protect pages and user data.

  Never trust supabase.auth.getSession() inside Server Components. It isn't guaranteed to revalidate the Auth token.

  It's safe to trust getUser() because it sends a request to the Supabase Auth server every time to revalidate the Auth token.
  ```

- [ ] test if testing works
- [ ] maybe add nextra (blog)