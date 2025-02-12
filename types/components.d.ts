declare type TGroupEntity = "channel" | "chat";

declare interface IChannelItem {
  title: string;
  description: string;
  image: string;
  link: string;
  type: TGroupEntity;
}

declare interface ISectionGroup extends Pick<IChannelItem, 'title'>{
  items: ISectionItem[]
}

declare interface ISectionItem extends Pick<IChannelItem, 'image' | 'link'>{
  name: string;
  customClass?: string;
}

declare interface IFishGroup extends Pick<IChannelItem, 'title'>{
  items: IFishItem[];
  
}
declare interface ICratesGroup extends Pick<IChannelItem, 'title'>{
  items: ICratesItem[];
}

declare interface ICratesItem extends Pick<IChannelItem, 'image' | 'name'>{
  biome: string;
  loot: string;
}
declare interface IFishItem extends Pick<IChannelItem, 'image' | 'name'>{
  description: string; //Path /public/images/mechanics/fishing/fishList
  craft: string;
}

declare interface IPlantsGroup extends Pick<IChannelItem, 'title'>{
  items: IPlantsItem[]
  description: string;
}

declare interface IPlantsItem extends Pick<IChannelItem, 'image' | 'name'> {
  seedimage: string;
  place: string[]; // Array of places
}

declare interface IRecepicesGroup {
  class: string;
}
declare interface IRecepicesItem extends Pick<IChannelItem, 'image'>, Pick<IChannelItem, 'name'>{

}