export interface TaskModel {
  title: string;
  descriptsion: string;
  dueDate: string;
  start: string;
  end: string;
  uids: string[];
  color?: string;
  fileUrls: string[];
}
