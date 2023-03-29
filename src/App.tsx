import "./index.css";
import { ReactNode, useCallback } from "react";
import { NotiApi, Notifications } from "./store";
import Badge from "./Badge";

function App() {
  const { isLoading, isSuccess, isError, error, data } =
    NotiApi.useGetAllQuery();

  const [readNoti] = NotiApi.useReadNotiMutation();

  const onMarkAllRead = useCallback(
    (notifications: Notifications[] | undefined) => {
      for (const noti of notifications!) {
        if (noti.isUnread) {
          readNoti({ id: noti.id, isUnread: false });
        }
      }
    },
    []
  );

  let content: ReactNode;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.notifications.map((n: Notifications) => {
      return <Badge key={n.id} item={n} />;
    });
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <main className="max-w-4xl w-full bg-white rounded-lg shadow-md shadow-light-400 py-6 px-4 sm:px-8 sm:py-9 sm:my-16 grid gap-6 sm:gap-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl leading-none">Notifications</h1>
          <span className="badge">
            {data?.notifications &&
              data?.notifications.filter((n) => n.isUnread).length}
          </span>
        </div>
        <button
          id="mark"
          disabled={data?.notifications ? false : true}
          onClick={() => onMarkAllRead(data?.notifications)}
          className="text-dark-800 transition-colors duration-200 ease-in-out hover:text-primary-blue focus:text-primary-blue"
        >
          Mark all as read
        </button>
      </header>
      <div className="grid gap-2">{content}</div>
    </main>
  );
}

export default App;
