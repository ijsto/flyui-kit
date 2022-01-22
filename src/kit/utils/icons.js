import React from 'react';

import AlphaDownIcon from '../icons/arrow-down-z-a.svg';
import NumberLowestFirstIcon from '../icons/arrow-up-1-9.svg';
import NumberHighestFirstIcon from '../icons/arrow-up-9-1.svg';
import AlphaUpIcon from '../icons/arrow-up-a-z.svg';
import BookmarkIcon from '../icons/bookmark.svg';
import BoldIcon from '../icons/bold.svg';
import ArchiveIcon from '../icons/box-archive.svg';
import CalendarDaysIcon from '../icons/calendar-days.svg';
import ClockIcon from '../icons/clock.svg';
import CheckIcon from '../icons/check.svg';
import ChevronDownIcon from '../icons/chevron-down.svg';
import ChevronLeftIcon from '../icons/chevron-left.svg';
import ChevronRightIcon from '../icons/chevron-right.svg';
import ChevronUpIcon from '../icons/chevron-up.svg';
import CircleNotchIcon from '../icons/circle-notch.svg';
import CodeIcon from '../icons/code.svg';
import CodeInlineIcon from '../icons/code-simple.svg';
import RestoreIcon from '../icons/clock-rotate-left.svg';
import EditIcon from '../icons/edit.svg';
import EmailIcon from '../icons/envelope.svg';
import EllipsisStrokeIcon from '../icons/ellipsis-stroke.svg';
import EyeIcon from '../icons/eye.svg';
import FacebookIcon from '../icons/facebook-f.svg';
import GitHubIcon from '../icons/github.svg';
import HeartIcon from '../icons/heart.svg';
import H1Icon from '../icons/h1.svg';
import H2Icon from '../icons/h2.svg';
import H3Icon from '../icons/h3.svg';
import H4Icon from '../icons/h4.svg';
import InstagramIcon from '../icons/instagram.svg';
import ItalicIcon from '../icons/italic.svg';
import OrderedListIcon from '../icons/list-ol.svg';
import LinkIcon from '../icons/link.svg';
import LinkedInIcon from '../icons/linkedin-in.svg';
import MessagesIcon from '../icons/messages.svg';
import MicrophoneIcon from '../icons/microphone.svg';
import MicrophoneOffIcon from '../icons/microphone-slash.svg';
import PasswordIcon from '../icons/unlock-keyhole.svg';
import PhoneIcon from '../icons/phone.svg';
import PhoneHangUpIcon from '../icons/phone-hangup.svg';
import PlusIcon from '../icons/plus.svg';
import QuoteIcon from '../icons/quote-left.svg';
import ReplyIcon from '../icons/reply.svg';
import SaveIcon from '../icons/save.svg';
import SearchIcon from '../icons/search.svg';
import ShareIcon from '../icons/share.svg';
import TimerIcon from '../icons/timer.svg';
import ExternalIcon from '../icons/square-up-right.svg';
import CloseIcon from '../icons/times.svg';
import TrashIcon from '../icons/trash.svg';
import TwitterIcon from '../icons/twitter.svg';
import VideoCameraIcon from '../icons/video.svg';
import VideoCameraOffIcon from '../icons/video-slash.svg';
import UnderlineIcon from '../icons/underline.svg';
import UnorderedListIcon from '../icons/list-ul.svg';
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
    case 'bold':
      return <BoldIcon />;
    case 'bookmark':
      return <BookmarkIcon />;
    case 'cancel':
      return <CloseIcon />;
    case 'calendar-days':
      return <CalendarDaysIcon />;
    case 'clock':
      return <ClockIcon />;
    case 'close':
      return <CloseIcon />;
    case 'code':
      return <CodeIcon />;
    case 'code-inline':
      return <CodeInlineIcon />;
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
    case 'ellipsis-stroke':
      return <EllipsisStrokeIcon />;
    case 'fb':
      return <FacebookIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'h1':
      return <H1Icon />;
    case 'h2':
      return <H2Icon />;
    case 'h3':
      return <H3Icon />;
    case 'h4':
      return <H4Icon />;
    case 'ijs':
      return <iJSIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'italic':
      return <ItalicIcon />;
    case 'left':
      return <ChevronLeftIcon />;
    case 'like':
      return <HeartIcon />;
    case 'link':
      return <LinkIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'list-ol':
      return <OrderedListIcon />;
    case 'list-ul':
      return <UnorderedListIcon />;
    case 'loading':
      return <CircleNotchIcon className="spin" />;
    case 'messages':
      return <MessagesIcon />;
    case 'microphone':
      return <MicrophoneIcon />;
    case 'microphone-off':
      return <MicrophoneOffIcon />;
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
    case 'phone':
      return <PhoneIcon />;
    case 'phone-hang-up':
      return <PhoneHangUpIcon />;
    case 'quote':
      return <QuoteIcon />;
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
    case 'timer':
      return <TimerIcon />;
    case 'trash':
      return <TrashIcon />;
    case 'twitter':
      return <TwitterIcon />;
    case 'underline':
      return <UnderlineIcon />;
    case 'up':
      return <ChevronUpIcon />;
    case 'user':
      return <UserIcon />;
    case 'video-camera':
      return <VideoCameraIcon />;
    case 'video-camera-off':
      return <VideoCameraOffIcon />;
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
