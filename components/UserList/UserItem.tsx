import React from 'react';
import Image from "next/image";
import {UserItemProps} from "./types";
import formatBigNumber from "../../helpers/formatBigNumber";

function UserItem({item}: UserItemProps): JSX.Element {
    return (
        <div className="flex mt-4 items-center">
            <span className="w-[60px] h-[60px] md:w-[110px] md:h-[110px]">
               <Image src={item?.profile_pic_url}
                      width="100%"
                      height="100%"
                      loader={() => item?.profile_pic_url}
                      className="rounded-full object-cover"
               />
            </span>

            <div className="ml-4">
                <b className="break-all text-sm md:text-base">{item?.ig_username}</b>
                <div className="text-neutral-500 text-sm">{item?.nationality}</div>
                <div className="text-xs">{formatBigNumber(item?.ig_num_followers)} followers</div>
                <div className="text-xs">{(item?.ig_engagement * 100).toFixed(2)}% engagement</div>
            </div>
            {!item?.hide_new_marker && <div className="ml-auto text-neutral-500">New</div>}
        </div>
    );
}

export default UserItem;


