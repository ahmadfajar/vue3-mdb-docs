/**
 * Simple function to strip one or more html element and keep its content.
 *
 * @param html The input string
 * @param tags The html tag to search
 */
export function stripTag(html: string, tags: string | string[]): string {
  if (!tags) {
    return html;
  }

  if (Array.isArray(tags)) {
    let strResult = html;

    tags.forEach((tag) => {
      const regex = RegExp('(<[/]|<)' + tag + '(.*)>', 'g');
      strResult = strResult.replace(regex, '');
    });

    return strResult.trim();
  } else {
    const regex = RegExp('(<[/]|<)' + tags + '(.*)>', 'g');
    return html.replace(regex, '').trim();
  }
}

/**
 * Simple function to remove one or more html element and its content.
 *
 * @param html The input string
 * @param tags The html tag to search
 */
export function removeElement(html: string, tags: string | string[]): string {
  if (!tags) {
    return html;
  }

  if (Array.isArray(tags)) {
    let strResult = html;

    tags.forEach((tag) => {
      const regex = RegExp('(<' + tag + '(.*)>)(.*)<[/]' + tag + '>', 's');
      strResult = strResult.replace(regex, '');
    });

    return strResult.trim();
  } else {
    const regex = RegExp('(<' + tags + '(.*)>)(.*)<[/]' + tags + '>', 's');
    return html.replace(regex, '').trim();
  }
}
