import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Notifications {
  id: number;
  author: {
    name: string;
    img: string;
    href: string;
  };
  action: string;
  link?: {
    text: string;
    href: string;
  };
  picture?: {
    img: string;
    href: string;
  };
  time: string;
  isUnread: boolean;
  privateMessage?: string;
}

export const NotiApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/.netlify/functions/",
  }),
  tagTypes: ["Noti"],
  endpoints: (builder) => ({
    getAll: builder.query<{ notifications: Notifications[] }, void>({
      query: () => "notifications",
      providesTags: [{ type: "Noti", id: "BADGES" }],
    }),
    readNoti: builder.mutation<Notification, { id: number; isUnread: boolean }>(
      {
        query: ({ id, isUnread }) => ({
          url: `notifications/${id}`,
          method: "PATCH",
          body: { id, isUnread },
        }),
        async onQueryStarted({ id, isUnread }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            NotiApi.util.updateQueryData("getAll", undefined, (draft) => {
              const noti = draft.notifications.find((n) => n.id === id);
              if (noti) noti.isUnread = isUnread;
            })
          );
          try {
            await queryFulfilled;
          } catch (error) {
            patchResult.undo();
          }
        },
      }
    ),
  }),
});

const store = configureStore({
  reducer: {
    [NotiApi.reducerPath]: NotiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(NotiApi.middleware),
  devTools: true,
});

export default store;
