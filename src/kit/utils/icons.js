import React from 'react';

import { ReactComponent as AlphaDownIcon } from '../icons/arrow-down-z-a.svg';
import { ReactComponent as NumberLowestFirstIcon } from '../icons/arrow-up-1-9.svg';
import { ReactComponent as NumberHighestFirstIcon } from '../icons/arrow-up-9-1.svg';
import { ReactComponent as AlphaUpIcon } from '../icons/arrow-up-a-z.svg';
import { ReactComponent as BookmarkIcon } from '../icons/bookmark.svg';
import { ReactComponent as ArchiveIcon } from '../icons/box-archive.svg';
import { ReactComponent as CheckIcon } from '../icons/check.svg';
import { ReactComponent as ChevronDownIcon } from '../icons/chevron-down.svg';
import { ReactComponent as ChevronLeftIcon } from '../icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../icons/chevron-right.svg';
import { ReactComponent as ChevronUpIcon } from '../icons/chevron-up.svg';
import { ReactComponent as CircleNotchIcon } from '../icons/circle-notch.svg';
import { ReactComponent as RestoreIcon } from '../icons/clock-rotate-left.svg';
import { ReactComponent as EditIcon } from '../icons/edit.svg';
import { ReactComponent as EyeIcon } from '../icons/eye.svg';
import { ReactComponent as FacebookIcon } from '../icons/facebook-f.svg';
import { ReactComponent as GitHubIcon } from '../icons/github.svg';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin-in.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';
import { ReactComponent as ReplyIcon } from '../icons/reply.svg';
import { ReactComponent as SaveIcon } from '../icons/save.svg';
import { ReactComponent as ShareIcon } from '../icons/share.svg';
import { ReactComponent as ExternalIcon } from '../icons/square-up-right.svg';
import { ReactComponent as CloseIcon } from '../icons/times.svg';
import { ReactComponent as TrashIcon } from '../icons/trash.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube.svg';

export const renderIcon = icon => {
  switch (icon) {
    case 'alphaDown':
      return <AlphaDownIcon />;
    case 'alphaUp':
      return <AlphaUpIcon />;
    case 'add':
      return <PlusIcon />;
    case 'archive':
      return <ArchiveIcon />;
    case 'bookmark':
      return <BookmarkIcon />;
    case 'close':
      return <CloseIcon />;
    case 'cancel':
      return <CloseIcon />;
    case 'create':
      return <PlusIcon />;
    case 'check':
      return <CheckIcon />;
    case 'delete':
      return <TrashIcon />;
    case 'down':
      return <ChevronDownIcon />;
    case 'edit':
      return <EditIcon />;
    case 'external':
      return <ExternalIcon />;
    case 'fb':
      return <FacebookIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'ijs':
      return <iJSIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'left':
      return <ChevronLeftIcon />;
    case 'like':
      return <HeartIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'loading':
      return <CircleNotchIcon className="spin" />;
    case 'new-window':
      return <ExternalIcon />;
    case 'numberAsc':
      return <NumberLowestFirstIcon />;
    case 'numberDesc':
      return <NumberHighestFirstIcon />;
    case 'ok':
      return <CheckIcon />;
    case 'preview':
      return <EyeIcon />;
    case 'reply':
      return <ReplyIcon />;
    case 'restore':
      return <RestoreIcon />;
    case 'right':
      return <ChevronRightIcon />;
    case 'save':
      return <SaveIcon />;
    case 'share':
      return <ShareIcon />;
    case 'trash':
      return <TrashIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'up':
      return <ChevronUpIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    case 'yt':
      return <YoutubeIcon />;
    case 'view':
      return <EyeIcon />;
    default:
      return icon;
  }
};
