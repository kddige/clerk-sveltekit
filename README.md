# POC: Clerk + SvelteKit

This is a proof of concept for using Clerk with SvelteKit, it should be treated as an experiment and not as a production ready code.
It is highly recommended to use the official Clerk SvelteKit, when it is released [(check their documentation)](https://clerk.com/docs)

## How to use

1. Clone the repository
```bash
git clone https://github.com/kddige/clerk-sveltekit.git
cd clerk-sveltekit
```

2. Install dependencies
```bash
yarn
```

3. Create a Clerk account and setup a project (since you are already here you probably already did that)
4. Create `.env` file in the root of the project and add the following variables

```bash
PUBLIC_CLERK_PUBLISHABLE_KEY=<PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<SECRET_KEY>
```

5. Run the project
```bash
yarn dev
```


## Features
- Client side authentication
- Client side session
- Server side authentication
- Server side session

## TODO (draft)
- [ ] Improve server side DX
  - [ ] Add a `withSession` middleware hook to handle sessions
  - [ ] Research/improve the current authentication flow. (I am almost certain the current way is NOT the best way to do it)
- [ ] Improve client side DX
  - [ ] Create a `useSession` store
  - [ ] Create a `useAuth` store
  - [ ] Create a `useUser` store
  - [ ] Create a `getAuth` function
  - [ ] ...Others?

## Contributing

Contributions are very much appreciated! If you want to contribute, please follow these steps:

- Fork the repository
  - Create a new branch
  - Make your changes
  - Create a pull request

## FAQ
---
- **Is this the Offical Clerk Sveltekit integration?**
  - **NO!!!** Its no way endorsed or maintained by Clerk. This is a proof of concept and it is highly recommended to use the official Clerk SvelteKit, when it is released [(check their documentation)](https://clerk.com/docs)

---
- **Why did you create this?**
  - I wanted to try out Clerk and SvelteKit and I couldn't find any examples of how to use them together. So I decided to create this POC.


---
- **Can I use this in my project?**
  - Yes, you can. But I am not responsible for any damage this code might cause.

---

- **Is it safe?**
  - One thing i know, is that i don't know anything🤓. Frankly i am not a security expert, so I can't guarantee that this code is safe. But I am pretty sure that it is safe enough for a POC. If you find any security issues, please let me know.