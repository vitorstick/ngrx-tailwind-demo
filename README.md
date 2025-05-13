# NgrxTailwindDemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## For this project the styles are using tailwind

#### Tailwind because is something I don't get to work every day and wish I was better with it

## State management with NgRx

#### I really like my effects ...

## Project structure

The `src/app` folder structure is organized as follows:

```
src/app
├── posts
│   ├── interfaces
│   ├── post-detail
│   ├── post-selected
│   ├── posts-container
│   ├── services
│   ├── state
│   │   ├── posts.actions.ts
│   │   ├── posts.reducer.ts
│   │   ├── posts.selectors.ts
│   │   └── index.ts
│   └── ...
├── app-routing.module.ts
├── app.component.ts
├── app.component.html
├── app.component.scss
├── app.module.ts
```

### posts

The `posts` folder contains all the components, services, and state management related to posts. The `state` folder contains the NgRx store files, including actions, reducers, and selectors.

**posts-container**: This component is responsible for displaying the list of posts and handling the selection of a post. Is used like the smart component.
**post-detail**: This component is responsible for displaying the details of a selected post. It is used as a dumb component.
**post-selected**: This component is responsible for displaying the selected post. It is used as a dumb component.
**interfaces**: This folder contains the interfaces used in the application.
**services**: This folder contains the services used in the application. The `posts.service.ts` file contains the logic to fetch posts from the API.
** state**: This folder contains the NgRx store files, including actions, reducers, and selectors. The `posts.actions.ts` file contains the actions used in the application. The `posts.reducer.ts` file contains the reducer used in the application. The `posts.selectors.ts` file contains the selectors used in the application.

### state structure

The store structure is organized as follows:

```
export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: unknown | null;
  selectedPost: Post | null;
}
```

## Development server (standard Angular CLI)

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running unit tests (using Jest)

To run unit tests, use the following command:

```bash
npm run test
```

## Running linter

To run the linter, use the following command:

```bash
npx ng lint
```
