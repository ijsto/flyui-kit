import React from 'react';

import AlphaDownIcon from '../icons/arrow-down-z-a.svg';
import NumberLowestFirstIcon from '../icons/arrow-up-1-9.svg';
import NumberHighestFirstIcon from '../icons/arrow-up-9-1.svg';
import AlphaUpIcon from '../icons/arrow-up-a-z.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import ArchiveIcon from '../icons/box-archive.svg';
import CheckIcon from '../icons/check.svg';
import ChevronDownIcon from '../icons/chevron-down.svg';
import ChevronLeftIcon from '../icons/chevron-left.svg';
import ChevronRightIcon from '../icons/chevron-right.svg';
import ChevronUpIcon from '../icons/chevron-up.svg';
import CircleNotchIcon from '../icons/circle-notch.svg';
import RestoreIcon from '../icons/clock-rotate-left.svg';
import EditIcon from '../icons/edit.svg';
import EmailIcon from '../icons/envelope.svg';
import EyeIcon from '../icons/eye.svg';
import FacebookIcon from '../icons/facebook-f.svg';
import GitHubIcon from '../icons/github.svg';
import HeartIcon from '../icons/heart.svg';
import InstagramIcon from '../icons/instagram.svg';
import LinkedInIcon from '../icons/linkedin-in.svg';
import PlusIcon from '../icons/plus.svg';
import ReplyIcon from '../icons/reply.svg';
import SaveIcon from '../icons/save.svg';
import SearchIcon from '../icons/search.svg';
import ShareIcon from '../icons/share.svg';
import ExternalIcon from '../icons/square-up-right.svg';
import CloseIcon from '../icons/times.svg';
import TrashIcon from '../icons/trash.svg';
import TwitterIcon from '../icons/twitter.svg';
import PasswordIcon from '../icons/unlock-keyhole.svg';
import UserIcon from '../icons/user.svg';
import YoutubeIcon from '../icons/youtube.svg';

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
    case 'email':
      return <EmailIcon />;
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
    case 'password':
      return <PasswordIcon />;
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
    case 'search':
      return <SearchIcon />;
    case 'share':
      return <ShareIcon />;
    case 'trash':
      return <TrashIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'up':
      return <ChevronUpIcon />;
    case 'user':
      return <UserIcon />;
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
