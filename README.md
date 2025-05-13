# NgrxTailwindDemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## For this project the styles are using tailwind

### Tailwind because is something I don't get to work every day and wish I was better with it

## State management with NgRx

### I really using effects ...

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
