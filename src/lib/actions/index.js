// export const fetchingStart = (type, requestId) => ({
//     type,
//     requestId,
// });
//
// fetchingDone = () => ({
//     q: '',
// });
//
// export const createActionSubmit = ({ FETCHING, request }) => (
//     (...args) => (
//         async dispatch => {
//             try {
//                 dispatch(fetchingStart(FETCHING, Date.now()));
//                 return await request(...args);
//             } finally {
//                 dispatch(fetching(FETCHING, null));
//             }
//         }
//     )
// );
