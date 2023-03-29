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
  },
  time: string;
  isUnread: boolean;
  privateMessage?: string;
}

const apiFetch = async (url: string): Promise<Notifications[]> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default apiFetch;