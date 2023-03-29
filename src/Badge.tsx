import { memo } from "react";
import { NotiApi, Notifications } from "./store";

const Badge = ({ item }: { item: Notifications }) => {
  // const img: string | undefined = new URL(
  //   `./images/${item.author.img}.webp`,
  //   import.meta.url
  // ).href;
  // const picture: string | undefined = new URL(
  //   `./images/${item.picture?.img}.webp`,
  //   import.meta.url
  // ).href;

  const img: string | undefined = `images/${item.author.img}.webp`;
  const picture: string | undefined = `images/${item.picture?.img}.webp`;

  const [readNoti] = NotiApi.useReadNotiMutation();

  const handleNotiClick = () => {
    if (item.isUnread) {
      readNoti({ id: item.id, isUnread: false });
    }
  };
  return (
    <div
      className="px-4 py-3 rounded-xl flex items-center justify-between gap-2 data-[unread=true]:cursor-pointer data-[unread=true]:bg-light"
      data-unread={item.isUnread}
      onClick={handleNotiClick}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-2">
        <img
          src={img ?? ""}
          alt={item.author.name}
          className="w-12 aspect-square"
        />
        <div className="grid gap-2">
          <div>
            <div>
              <a className="text-dark-800" href={item.author.href}>
                {item.author.name}
              </a>
              <span> {item.action}</span>
              {item.link && (
                <a className="text-dark-500" href={item.link.href}>
                  {" "}
                  {item.link.text}
                </a>
              )}
              {item.isUnread && <span className="unread"></span>}
            </div>
            <p className="text-dark">{item.time}</p>
          </div>
          {item.privateMessage && (
            <p className="p-4 rounded-xl border border-light-400 hover:cursor-pointer hover:bg-light-400 hover:border-transparent hover:text-dark-500">
              {item.privateMessage}
            </p>
          )}
        </div>
        <div className="self-end">
          {item.picture && (
            <a href={item.picture.href}>
              <img
                className="w-12 h-auto"
                src={picture}
                alt={item.picture.img}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MemoizedBadge = memo(Badge);
export default MemoizedBadge;
