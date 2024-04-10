interface Friend {
    id: number;
    fullName: string;
    nickname: string;
    isFollowed: boolean;
    avatar: string;
  }
  
  const FriendsData: Friend[] = [
    { id: 1, fullName: 'Pooja Hegde', nickname: 'pooja_hegde', isFollowed: false, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png' },
    { id: 2, fullName: 'Marshal Mathers', nickname: 'eminem', isFollowed: true, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png' },
    { id: 3, fullName: 'Akshay Kumar', nickname: 'akshaykumar', isFollowed: false, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png' },
    { id: 4, fullName: 'Ava', nickname: 'ava_32', isFollowed: true, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png' },
    { id: 5, fullName: 'Emma Watson', nickname: 'emma_watson', isFollowed: true, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png' },
    { id: 6, fullName: 'Rupa Rajeshan', nickname: 'rupa_rajeshan', isFollowed: false, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png' },
    { id: 7, fullName: 'Oliver', nickname: 'oliver_54', isFollowed: false, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png' },
    { id: 8, fullName: 'Ganesh Verma', nickname: 'gany_varma', isFollowed: true, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png' },
    { id: 9, fullName: 'Kiran Katore', nickname: 'kiran_katore', isFollowed: false, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png' },
    { id: 10, fullName: 'Zeel Fernandez', nickname: 'zeel_Fernandez', isFollowed: true, avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png' },
  ];
  
  export default FriendsData;
  