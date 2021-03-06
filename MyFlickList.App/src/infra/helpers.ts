import decodeJwt from 'jwt-decode';
import { FlickListingResponse, ProfileListingResponse } from './api.generated';
import config from './config';
import { getAbsoluteUrl } from './utils';

export class AuthTokenHelper {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  private decode() {
    return decodeJwt(this.value) as Record<string, string | number | undefined>;
  }

  getExpiration() {
    const unixTime = Number(this.decode()['exp']);
    return new Date(unixTime * 1000);
  }

  isExpired() {
    const expiration = this.getExpiration();

    if (!expiration) {
      return true;
    }

    return new Date() < expiration;
  }

  getUserId() {
    return Number(this.decode()['sub']);
  }

  getUsername() {
    return this.decode()['preferred_username'] as string;
  }

  getEmail() {
    return this.decode()['email'] as string;
  }

  isEmailVerified() {
    return (this.decode()['email_verified'] as string) === 'True';
  }

  getProfileId() {
    return Number(this.decode()['mfl_profile_id']);
  }
}

export class FlickHelper {
  readonly flick: FlickListingResponse;

  constructor(flick: FlickListingResponse) {
    this.flick = flick;
  }

  getCoverImageUrl() {
    if (!this.flick.coverImageId) {
      return '/images/poster-placeholder.png';
    }

    return getAbsoluteUrl(config.apiUrl, `/files/${this.flick.coverImageId}`);
  }

  formatKind() {
    if (this.flick.kind === 'Series' && this.flick.episodeCount && this.flick.episodeCount > 0) {
      return `${this.flick.kind} (${this.flick.episodeCount} eps)`;
    }

    return `${this.flick.kind}`;
  }

  formatRating() {
    if (!this.flick.externalRating) return '--';

    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1
    });

    return formatter.format(this.flick.externalRating);
  }

  formatFirstAired() {
    if (!this.flick.firstAired) return '--';

    const formatter = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return formatter.format(new Date(this.flick.firstAired));
  }

  formatLastAired() {
    if (!this.flick.lastAired) return '--';

    const formatter = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return formatter.format(new Date(this.flick.lastAired));
  }

  formatDate() {
    if (!this.flick.firstAired) return '--';

    const formatter = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    if (this.flick.kind === 'Movie') {
      return formatter.format(new Date(this.flick.firstAired));
    }

    if (this.flick.lastAired) {
      return (
        formatter.format(new Date(this.flick.firstAired)) +
        ' - ' +
        formatter.format(new Date(this.flick.lastAired))
      );
    }

    return formatter.format(new Date(this.flick.firstAired)) + ' - ...';
  }

  formatRuntime() {
    if (!this.flick.runtime) return '--';

    const components = this.flick.runtime.split(':');
    const hours = Number(components[0]);
    const minutes = Number(components[1]);

    if (hours + minutes <= 0) return '--';

    const hoursSuffix = hours === 1 ? 'hr' : 'hrs';
    const minutesSuffix = minutes === 1 ? 'min' : 'mins';

    const hoursPart = hours > 0 ? `${hours} ${hoursSuffix}` : '';
    const minutesPart = minutes > 0 ? `${minutes} ${minutesSuffix}` : '';

    const formatted = [hoursPart, minutesPart].join(' ');

    if (this.flick.kind === 'Series') {
      return formatted + ' / ep';
    }

    return formatted;
  }

  formatYears() {
    if (!this.flick.firstAired) return '--';

    const firstAiredYear = new Date(this.flick.firstAired).getUTCFullYear();

    if (!this.flick.lastAired) {
      if (this.flick.kind === 'Movie') {
        return `${firstAiredYear}`;
      } else {
        return `${firstAiredYear} —`;
      }
    }

    const lastAiredYear = new Date(this.flick.lastAired).getUTCFullYear();

    if (firstAiredYear === lastAiredYear) {
      return `${firstAiredYear}`;
    }

    return `${firstAiredYear} — ${lastAiredYear}`;
  }

  formatTags() {
    if (!this.flick.tags || this.flick.tags.length <= 0) return '--';

    return this.flick.tags.join(', ');
  }
}

export class ProfileHelper {
  readonly profile: ProfileListingResponse;

  constructor(profile: ProfileListingResponse) {
    this.profile = profile;
  }

  getAvatarImageUrl() {
    if (!this.profile.avatarImageId) {
      return `https://robohash.org/${this.profile.id}_${this.profile.name}.png?size=300x300`;
    }

    return getAbsoluteUrl(config.apiUrl, `/files/${this.profile.avatarImageId}`);
  }
}
