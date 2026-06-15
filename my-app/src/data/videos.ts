export interface Video {
  id: number;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
}

export const videoData: Video[] = [
  {
    id: 1,
    videoUrl: '/videos/friday.mp4',
    authorName: 'HoangHieu 1',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
    likesCount: 12,
  },
  {
    id: 2,
    videoUrl: '/videos/mov_bbb.mp4',
    authorName: 'Wing',
    description: 'Below this video is a video with no description ',
    likesCount: 6,
  },
  {
    id: 3,
    videoUrl: '/videos/trailer.mp4',
    authorName: 'HoangMinh',
    description: '#trending',
    likesCount: 4,
  },
];
