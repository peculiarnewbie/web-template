import { css } from "@tokenami/css";

export const appStyles = css({
  "--width": "var(---, 100%)" as any,
  "--max-width": "var(---, 640px)" as any,
  "--padding-inline": 4 as any,
  "--padding-block": 8 as any,
});

export const headingStyles = css({
  "--font-size": "var(--font-size_lg)" as any,
  "--font-weight": "var(---, 600)" as any,
  "--margin-bottom": 6 as any,
});

export const formStyles = css({
  "--display": "var(---, flex)" as any,
  "--gap": 2 as any,
  "--margin-bottom": 6 as any,
});

export const inputStyles = css({
  "--flex": "var(---, 1)" as any,
  "--padding-left": 3 as any,
  "--padding-right": 3 as any,
  "--padding-top": "var(---, 0.6rem)" as any,
  "--padding-bottom": "var(---, 0.6rem)" as any,
  "--border": "var(---, 1px solid var(--color_border))" as any,
  "--border-radius": "var(--radii_md)" as any,
  "--background-color": "var(--color_surface)" as any,
  "--color": "var(--color_text)" as any,
  "--font-size": "var(--font-size_base)" as any,
  "--outline": "var(---, none)" as any,
});

export const buttonStyles = css({
  "--padding-left": 5 as any,
  "--padding-right": 5 as any,
  "--padding-top": "var(---, 0.6rem)" as any,
  "--padding-bottom": "var(---, 0.6rem)" as any,
  "--border": "var(---, none)" as any,
  "--border-radius": "var(--radii_md)" as any,
  "--background-color": "var(--color_accent)" as any,
  "--color": "var(--color_white)" as any,
  "--font-size": "var(--font-size_base)" as any,
  "--font-weight": "var(---, 500)" as any,
  "--cursor": "var(---, pointer)" as any,
});

export const messageListStyles = css({
  "--list-style": "var(---, none)" as any,
  "--display": "var(---, flex)" as any,
  "--flex-direction": "var(---, column)" as any,
  "--gap": 3 as any,
});

export const messageCardStyles = css({
  "--padding-left": 4 as any,
  "--padding-right": 4 as any,
  "--padding-top": 3 as any,
  "--padding-bottom": 3 as any,
  "--background-color": "var(--color_surface)" as any,
  "--border": "var(---, 1px solid var(--color_border))" as any,
  "--border-radius": "var(--radii_md)" as any,
});

export const messageContentStyles = css({
  "--font-size": "var(--font-size_base)" as any,
  "--line-height": "var(---, 1.5)" as any,
});

export const messageTimeStyles = css({
  "--font-size": "var(--font-size_sm)" as any,
  "--color": "var(--color_text-muted)" as any,
  "--margin-top": "var(---, 0.4rem)" as any,
});

export const emptyStateStyles = css({
  "--text-align": "var(---, center)" as any,
  "--color": "var(--color_text-muted)" as any,
  "--padding": 12 as any,
  "--font-size": "var(--font-size_base)" as any,
});

export const errorBannerStyles = css({
  "--padding-left": 4 as any,
  "--padding-right": 4 as any,
  "--padding-top": 3 as any,
  "--padding-bottom": 3 as any,
  "--background-color": "color-mix(in srgb, var(--color_danger) 15%, transparent)" as any,
  "--border": "var(---, 1px solid var(--color_danger))" as any,
  "--border-radius": "var(--radii_md)" as any,
  "--color": "var(--color_danger)" as any,
  "--font-size": "var(--font-size_base)" as any,
  "--margin-bottom": 4 as any,
});
