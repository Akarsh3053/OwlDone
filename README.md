<div align="center">
      <h1> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUf4Ug7JGUgHOF3tij14aE9c_YUNOgaIW4r5166CEW1QH570P1v40Z12lnUppsXUrkoYsVWPr7bjHZf17jzfvoaO0_ty4DFHvel71f6kfElDINTmRgm6UCeOBLatkzSIn8-rswXO436PLcbl7kgkAh7cmvIgnpzKBcujSFjaCIA-pfbcRu3rGUL6Jctvw/s320/owldone.jpg" width="80px"><br/>OwlDone</h1>
     </div>
<p align="center"> <a href="https://www.onlyakarsh.com/" target="_blank"><img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=dribbble&logoColor=white" style="vertical-align:center" /></a> <a href="https://twitter.com/only_akarsh" target="_blank"><img alt="" src="https://img.shields.io/badge/Twitter-1DA1F2?style=normal&logo=twitter&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.instagram.com/mayank__arc" target="_blank"><img alt="" src="https://img.shields.io/badge/Instagram-E4405F?style=normal&logo=instagram&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.linkedin.com/in/akarsh3053/}" target="_blank"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=normal&logo=linkedin&logoColor=white" style="vertical-align:center" /></a> </p>

# Description

OwlDone is a Next and React-based web app that can be used as a collaborative SAAS platform for project management and task planning. It uses a modern UI based on ShadCN components and tailwind CSS. It uses Clerk for authentication and user management and PostgreSQL as a database. It has Stripe as a payment gateway and Unsplash API for images. It is completely built upon Next server actions for all backend operations to make the UI snappy and improve user experience.

# Features

To improve user experience OwlDone has several thoughtful features that make the UI user-friendly and intuitive. Some of these features are --

- Minimal UI
- Activity logs
- Unsplash API
- Built-in user management.
- Integrated payment gateway.
- Snappy operations with server actions.
- PostgreSQL database for reliable and safe storage.

# Screenshots

### Landing Page
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUiCSBFKXi1w5tabth7noVfR3oK3IgTZS8RHIL_JFB15j2wsW-8oIQIudNPNRPvbjxTAe2tpxCYW9P8ArvEDWdzWKkdDakb6xAz2uirZK4_8o5AM0qJC34MrWoKpf1hAe1E1FN6JMA82f4k_ylLitru8q371t4I57m2S61-cxp_WbkDnD-ypOBGF0eMGc/s16000/Home.png"> 

### Task Board
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy7al870ReO49K5WLXfdZh8e-T9M5RSVwp_N654Vt9_gxULDWd8tyaW07hBNgHL4ZJlPaOS0V1UwF3b9S-J8RHI_9XElKS9g_MWBi1Toz40wlP4NO3rhD5hGwBsJoitfCWKKHNOBXbUXxyakpqdF3JVtTz-m0QXZUI1NncAniN31XwoAIaXufrscnuQuY/s16000/Board.png">

# Tech Used

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white) ![Unsplash](https://img.shields.io/badge/Unsplash-000000?style=for-the-badge&logo=Unsplash&logoColor=white)

# Got any ideas?

### Here's how you can contribute to `OwlDone`

To contribute set up the local environment, develop and test your feature, or fix any existing bug. Once you are happy with your work, go ahead and raise a pull request, I'll be glad to merge any constructive change to the project, making it more awesome✌️.

### Setup:

- Clone the repository

```bash
git clone https://github.com/Akarsh3053/OwlDone
```

- Install the dependencies

```bash
npm install
```

### API references

| Syntax                            | Description                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| DATABASE_URL                      | Connection url for any MySQL database, or use <a href="https://neon.tech/">this.</a>                         |
| CLERK_SECRET_KEY                  | Clerk is used for auth and user management, get keys from <a href="https://dashboard.clerk.com/">here.</a>   |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | Clerk auth provider API key from Clerk.                                                                      |
| NEXT_PUBLIC_UNSPLASH_ACCESS_KEY   | Unsplash API used for random cover images, get keys from <a href="https://unsplash.com/developers">here.</a> |
| STRIPE_API_KEY                    | API key for payment gateway, get it from <a href="https://docs.stripe.com/api">here.</a>                     |

- Push schema to database

```bash
prisma db push
```

- Generate schema references

```bash
prisma generate
```

- Run local instance

```bash
npm run dev
```

### If everything goes well, the app will be running at:

- <a href="http://localhost:3000">http://localhost:3000</a>
