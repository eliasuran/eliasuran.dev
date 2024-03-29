export const getAccessToken = async () => {
  const refreshToken = import.meta.env.REFRESH_TOKEN;
  const clientId = import.meta.env.CLIENT_ID;
  const clientSecret = import.meta.env.CLIENT_SECRET;
  const auth = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

export interface CurrentlyPlaying {
  image: string;
  artists: { name: string }[];
  href: string;
  name: string;
}

export const getCurrentlyPlaying = async (token: string) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (res.status !== 200) {
    return null;
  }

  const data = await res.json();

  if (!data.is_playing) {
    return null;
  }

  return {
    image: data.item.album.images[0].url,
    artists: data.item.artists,
    href: data.item.uri,
    name: data.item.name,
  };
};

export interface Track {
  artists: [
    {
      name: [{ name: string }];
    },
  ];
  name: string;
  album: {
    name: string;
    images: [
      {
        url: string;
      },
    ];
  };
  external_urls: {
    spotify: string;
  };
}

export const getTopTracks = async (token: string) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data.items.map((item: Track) => {
    return {
      artists: item.artists,
      name: item.name,
      album: {
        name: item.album.name,
        images: [{ url: item.album.images[0].url }],
      },
      external_urls: { spotify: item.external_urls.spotify },
    };
  });
};

export interface Artist {
  images: [
    {
      url: string;
    },
  ];
  name: string;
  external_urls: {
    spotify: string;
  };
}

export const getTopArtists = async (token: string) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data.items.map((item: Artist) => {
    return {
      name: item.name,
      images: [{ url: item.images[0].url }],
      external_urls: { spotify: item.external_urls.spotify },
    };
  });
};

/* smerten jeg måtte gå gjennom for å få refresh tokenenen min*/
export const getRefreshToken = async () => {
  const clientId = import.meta.env.CLIENT_ID;
  const clientSecret = import.meta.env.CLIENT_SECRET;
  const auth = btoa(`${clientId}:${clientSecret}`);

  const getAuthCode = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=user-top-read user-read-currently-playing&redirect_uri=http://localhost:4321/music`;
  console.log(getAuthCode);

  const code = "secret";

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4321/music`,
  });

  const data = await res.json();
  console.log(data);
};
