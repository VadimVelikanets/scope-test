import React from 'react';
import Image from "next/image";
import {UserItemProps} from "./types";
import formatBigNumber from "../../helpers/formatBigNumber";

function UserItem({item}: UserItemProps): JSX.Element {
    return (
        <div className="flex mt-4 items-center">
            <Image src={item?.profile_pic_url}
                   width="110"
                   height="110"
                   loader={() => item?.profile_pic_url}
                   className="rounded-full object-cover"
            />
            <div className="ml-4">
                <b>{item?.ig_username}</b>
                <div className="text-neutral-500">{item?.nationality}</div>
                <div>{formatBigNumber(item?.ig_num_followers)} followers</div>
                <div>{(item?.ig_engagement * 100).toFixed(2)}% engagement</div>
            </div>
            {!item?.hide_new_marker && <div className="ml-auto text-neutral-500">New</div>}
        </div>
    );
}

export default UserItem;


