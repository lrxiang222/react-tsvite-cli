# React-TsVite-Cli

In order to unify project development, self organized scaffolding of projects based on React, Redux and React Router Dom

## technology stack

1、React+Hooks  
2、Ts+Scss  
3、react-router-dom@6  
4、Redux、react-redux  
5、axios

## Using

1、npm install -g react-tsvite-cli  
2、react-tsvite-cli create your-projectname  
3、cd ./your-projectname  
4、npm run dev

## Redux

1. A corresponding Redux status management tree will be created by default for the page opened by the tab of each browser; (Therefore, the data of the status management tree of each tab is not synchronized.)
2. The main function of Redux is to handle the state management of SAP single page type. For SSR pages with high complexity, they need to be used in combination with storage.
3. Redux should not store sensitive data, which is easy to obtain.
4. In combination with the use of React, Redux needs to add a react redux plug-in.
5. To implement asynchronous actions, Redux needs to add: act trunk

## React-router

1. The overall route adopts[“ react-router-dom@6 "] Plug ins can be used as BrowserRouter, HashRouter, and HistoryRouter; Commonly used: BrowserRouter
2. The overall management of routes is placed in the/src/routes folder
3. For router jump management, you must add path="\*" as the management of 404 pages.
4. In the version of react router v6, the encapsulated hooks writing method is added. Therefore, this architecture mainly adopts the React Hooks writing method.
5. Commonly used hooks need to be memorized and understood: useHref, useNavigate, useParams, etc.
6. UseHref: returns a link relative to the current route
7. UseInRouterContext: returns a boolean value of whether the current component is in the react router. It is very useful for third-party extensions that want to know whether the current component uses the react router
8. UseLocation returns a current routing object
9. UseNavigate returns a NavigateFunction, which can be used for programmatic navigation, equivalent to a Navigate component
10. UseNavigationType returns the NavigationType, which can be used to determine how to get to the [POP "," PUSH "," Replace "] of the page
11. UseOutletContext: then you can receive the data passed from the parent route
12. UseParams: used to obtain the params of the current route
13. UseResolvedPath: used to resolve the given path. You can pass in a relative url and an absolute url and return an object
14. useRoutes: Pass in an array of routes and return the corresponding components to be displayed. It is somewhat similar to the configuration of routes in vue. You can configure routes in other folders
15. The hooks of useLinkClickHandler return a click event handler, which can be used to create a custom jump link. After clicking, you can jump to the target link. You can pass a to (target link) and an options
16. UseSearchParams: returns a data, the first is searchParams, the second is setSearchParams, which is used to update searchParams,

## React Network Request Architecture  

1. Network Request Model Selection: [Axios Vs Fetch](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios)  
2. Axios is finally selected as the network request infrastructure selection scheme of the current technical architecture.  
3. The Axios point that needs to be used is to cancel the sent request content.  
4. Axios [For the request of "cancelToken", refer to the document](https://www.wjsljc.com/document/ts-axios/axios/chapter7/cancel.html)  
5. Axios About [AxiosCancelToken](https://dnlytras.com/snippets/axios-cancel/) Specific implementation scheme of  
6. Please refer to "/src/services/http" for specific implementation and code encapsulation;  
