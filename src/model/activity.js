export class ActivityModel {
  constructor(data) {
    this.activity = data.activity;
    this.link = data.link;
  }

  serializeData = () => ({
    activity: this.activity,
    link: this.link
  })
}