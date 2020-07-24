---
title: Changelog
description: A detailed reviews of behavior changes and bug fixes.
layout: "single-basic"
---

## 0.7.2 -- July 24, 2020

### Known Bugs:

* There is a new behavior where a group admin will see a suggestion about giving prospective members a link to the Membership Application but this page is currently behind a sign in wall for private groups.

### Group Site

* [FIXED] When an `Event` is deleted all of the children `Reservations` are now also deleted.
* [CHANGED] While editing an Event you can now choose a duration of up to 8 hours. This should accommodate my friends at Philly CocoaHeads who run a long Side Project Saturday event that spans many hours.
* [CHANGED] Sign Up and Reset Password links on the Sign In page are now underlined.
* [CHANGED] All "prose" links are now the default text color and not a shade of blue.
* [FIXED] For sections of the group site that require authentication (like the Members section) I reverted a recent change that sent a `401 Forbidden` HTTP response to send a `302 Redirect` HTTP response once again. This `302 Redirect` will redirect to the Sign In page with flash message about the required authentication. `401` is probably a more truthy HTTP response but you technically can't redirect a user with a `401` and I don't want to render the sign in form in a `401` response. 
* [CHANGED] All pages should now have meaningful page titles. In addition I've setup an internal warning during development and testing that should throw an error if no custom  title is present.
* [FIXED] The Sign In page now properly displays the group name and not the static text "Philly Movie Club". Thanks Travis!
* [ADDED] During the new Group onboarding process the owner is now automatically signed in.
* [REMOVED] Temporally removed the tint color UI picker from the group onboarding flow since we do not currently honor it and will most likely be prioritizing other features for now.
* [ADDED] For a new group with no members (beside the owner) we now display a "Group Admin Suggestion" informing how to invite people to fill out the Membership Application. Note: This is an incorrect behavior for Private groups. See Known Bugs above.
* [ADDED] When there are no upcoming events we now show a "Group Admin Suggestion" with a new event link. 
* [ADDED] An event now has a field for "Video Chat URL". This URL will be shared with RSVPed members only and never to the general public.
* [ADDED] Added a few links that are displayed only for signed in admins that will allow them to quickly jump the edit page of an event from the group website to the admin section. In time I plan to remove the dedicated "admin section" in favor of more inline admin tools within the group site frame but this will help in the meantime.
* [ADDED] The Account Tools links in the Member Profile now include an "Edit Avatar Photo" link which points to Gravatar. 
* [ADDED] We now send an email to people when they submit a Membership Application explaining how the approval process works. Also improved website language about this.
* [ADDED] The Group owner will now be sent a notification when a new Membership Application is ready for review.
* [CHANGED] Updated the copy for the accepted and declined emails that are sent when a Membership Application is finalized.

### Behind the Scenes Stuff

* [CHANGED] Updated various node packages to address security vulnerabilities. 

## 0.6.2 -- July 10, 2020

### Known Bugs

* If you are not signed in and try to view the Members list, the site does not redirect correctly.
* The Sign In form incorrectly uses a static group name of "Philly Movie Club" instead of the real group name. Thanks Travis!

### Manager and Group Site

* [ADDED] We now render a simple 404 page when attempting to load a page that doesn't exists or a group / subdomain that is not registered.

### Group Site

* [CHANGED] The attendee count (not names) are now listed on an event detail page for non-signed in visitors for on public group websites.
* [CHANGED] When a new member is created from a membership application they are now given a random password instead of "changeme1234".
* [CHANGED] Fixed a typo in RSVP instructions. Thanks Kevin!
* [ADDED] Members can now reset their password with an emailed link. This link will expire after 1 day for security. For additional security, we also require a member to manually sign in with this new password after picking a new password.
* [ADDED] A member can now edit their member profile (including first name, last name and bio). The bio content allows Markdown-formatted content for formatting needs.
* [ADDED] An admin can also edit a member's profile, but a note is presented suggesting a member should be asked to fix any issues themselves first, if possible.
* [CHANGED] We now enforce a string length of 255 or less for first name and last name of a member profile.
* [ADDED] There is a now a "Sign Up" link on the Sign In form that takes a visitor to the membership application. 
* [FIXED] If a member was marked to setup a new password (usually done after an admin had manually created a member account in the current Admin Tools) and the member later uses the reset password flow, the flag to force a set new password is set to false.

### Manager

* [CHANGED] Edited the `title` of the Create Group form to "Create Group on Guildflow".
* [ADDED] When setting up a group and the initial owner, you can now check a box to also signup the Guildflow Announcements email newsletter.

### Behind the Scenes Stuff

* [CHANGED] Updated Elixir project dependencies, including Phoenix to version 1.5.3.
* [ADDED] Added / fixed CSS purging during the production deployment to make CSS files smaller.
* [REMOVE] Deleted various old image and CSS assets that are no longer in use or were moved to the static marketing site.
* [CHANGED] Updated various npm modules to newest versions.
* [ADDED] Added `phx-track-static` to CSS and JS resources to help with web socket behavior.
* [CHANGED] We no longer send emails to Postmark during development.
* [ADDED] Production LiveDashboard is now available for system admins to monitor server resources. 
* [ADDED] Now using AppSignal to monitor various code issues.

## 0.5.3 -- June 18, 2020

* [ADDED] Support for IPV6 to HTTPS connection.

## 0.5.2 -- June 18, 2020

* [CHANGED] Various ssl and config changes to make the new `manager.guildflow.com` and other subdomains work properly in production.

## 0.5.1 -- June 17, 2020

* [CHANGED] Various ssl and config changes to make the new `manager.guildflow.com` and other subdomains work properly in production.

## 0.5.0 -- June 17, 2020

* [CHANGED] The project has been renamed Guildflow.
* [CHANGED] The marketing site has been migrated to a Hugo static site generator.
* [CHANGED] The Create Group form no longer has any of the marketing site chrome.
* [CHANGED] The Create Group now lives at `manager.guildflow.com`.
* [CHANGED] Some technical updates as to how we apply SSL for HTTPS support.

## 0.4.2 -- June 6, 2020

* [FIXED] Second pass at getting Markdown content for marketing pages to render properly.

## 0.4.1 -- June 6, 2020

* [FIXED] Updated `check_origin` settings of LiveView's websocket to fix cross site loading issue. 
* [ADDED] You can now edit the `privacy_level` of a group in the Admin section. This is important as all migrated groups from previous releases have been marked as `private` which requires a sign in to do or see anything on a group website. A `public` option is more open about the group name, summary and event basics.
* [FIXED] If a subdomain has a number it loaded the marketing page.
* [FIXED] Markdown content for marketing pages not rendering.
* [FIXED] Updated force_ssl config.

## 0.4 -- June 6, 2020

* [CHANGE] The app now includes [TailwindCSS](https://tailwindcss.com/) tooling to help execute CSS layout and design.
* [ADDED] We now pull in the TailwindUI node packages and styles.
* [CHANGE] The group site header and navigation have been rebuilt with slight design tweaks and much better mobile / responsive support.
* [CHANGE] Updated to Phoenix (to v1.5.1) and updated other dependencies as well. Commented out Absinthe/GraphQL API for now as it has compatibility issues.
* [CHANGE] Updated JavaScript dependencies.
* [ADDED] Added support for Phoenix LiveView.
* [ADDED] The developer tool Phoenix LiveDashboard was added for local development. Production deployment might be added in the future.
* [CHANGE] Removed the `group_layout.css` file which formerly powered the group site design.
* [CHANGE] The group website now uses a consistent background color of `bg-gray-100`. This should help form elements with white backgrounds pop a bit more providing separation as well as improve general readability.
* [CHANGE] After creating a group there is a new onboarding experience that will have the user define some identity values (group name, tint color, group summary), a privacy level (private or public) and info for their member account, which will become the owner of the group as well as its first admin. Tint color is recorded but not really honored (yet).
* [CHANGED] Added note to onboarding that tint color is not fully implemented (yet).
* [CHANGED] How we internally assign a page `title`s has changed. Many pages may have broken or missing titles.
* [CHANGED] The marketing website has been drastically updated with new layout and pages. Too many to mention. It's brand new!
* [CHANGED] Updated the Upcoming Events look and feel on the group home page.
* [CHANGED] Updated the look and behavior of flash messages inside the group. They can now be closed.
* [CHANGED] Updated the look and behavior of the Event Detail page and the RSVP form.
* [ADDED] When recording an RSVP you can now must consent to the sharing of said RSVP. If you choose not to share you will influence the attending count but will not be listed on the event page.
* [CHANGED] If an event's date is in the past the RSVP system is still functional but the language will change to past tense.
* [CHANGED] Updated the layout of the sign in form to use new CSS tooling.
* [CHANGED] Updated the layout of the member detail page to use new CSS tooling.
* [CHANGED] Updated the layout of the member list page to use new CSS tooling.
* [CHANGED] Now sorting by member last name in member list and reservation list.
* [CHANGED] Updated the layout of the event list pages to use new CSS tooling.
* [ADDED] Now showing a "no events" message when attempting to render a list with no events. 
* [CHANGED] Renamed "Join Group" to "Membership Application".
* [CHANGED] Updated the layout of the membership application pages to use new CSS tooling.
* [ADDED] Added stub pages for Export Member Data and Delete Member Account pages. For now we ask you send a support email to do this manually.
* [FIXED] Now using correct avatar (we now use gravatars everywhere) for user in mobile menu.
* [ADDED] Added a technical support email link to the group footer. 
* [ADDED] Re-added an "Admin Tools" link until we replace the admin area with more inline group site tools.
* [CHANGED] The Edit Member Profile button has been temporally hidden until that behavior is re-added.
* [CHANGED] The website should now force `https` when an `http` requests come in.
* [CHANGED] Updated layout of change password form.
* [ADDED] Added unit test around change password form behavior.
* [ADDED] Added behavior and tests that force a member to sign in to access all content driven aspects of a private group as well as making sure the group name is not published on the sign in form.
* [CHANGE] We now only show event RSVP info to signed in members, even when the group is marked "public".
* [FIXED] Addresses issue where a user could create a subdomain that didn't work properly. We now enforce rules when accepting these values in the Create Group form.

## 0.3.3 -- April 29, 2020

* [FIX] The new group redirect is once again working in a production environment.

## 0.3.2 -- April 27, 2020

### CHANGES

* We no longer record and later post a "flash message" when a new group is created since it would only display on the marketing site and not the group site.
* Made an adjustment in the group page layout to allow for longer group names. This is a short term fix. The whole group site style will be revamped soon™.

### FIXES

* Fixed a bug where the event detail page was showing the wrong date for an event.
* We now display the group name in the HTML `title`.
* Fixes bad (purple) header links in group site. They were showing as purple when we expected white.
* Fixed issue where the count of invite requests in the member admin area was incorrect.
* Updated the event description field to be `text` and not `string` which previously limited the summary values to be 255 characters.
* Updated the group summary field to be `text` and not `string` which previously limited the summary values to be 255 characters.
* When creating a new group, that group is now assigned a time zone (as long as JavaScript was enabled on the New Group form).
* In development, new groups are now properly redirected.
* Removed unused console debugging.

## 0.3 -- April 20, 2020 (Public Alpha)

### ADDED

* Members can now upload a photo to their profile.
* Members can now edit a "bio" in Markdown in their profile.
* Upon accepting or declining an invite a member will now get an email. [Fixes #169189048]
  * Text of these emails is currently fixed in code but is custom to each user.
* Added `.alert-info` css styling for group and public layout files.
* Added `Member.is_owner` and `Member.`is_admin`. `is_admin` controls which members have access to the admin panel and all of its features. `is_owner` will (in the future) block control of billing and related behaviors. 
* From the Admin section, any admin can mark other Members as admins. 
* Currently no one else can become the owner of a group, but in the future we envision multiple people could have this flag enabled.
* Added new GraphQL query endpoints for `member`, `members` and `me`.
* Added new GraphQL mutation endpoints for `signin` and `edit_member`
* Added Authentication middleware that forces auth token for most calls.
* Added an `errors_on(graphql_response)` for easier testing of GraphQL errors.
* Started a new `fixture` pattern for tests. Currently offers `group_fixture`, `member_fixture` and `clear_all_fixtures`.
* Added new business model `Guildflow.Events.Reservation` which keeps track of if a member has signaled they will be or won't be attending an upcoming event.
* From the Event's detail page on the public website a logged in user can view their current reservation status. If no reservation exists they can make one. If one does exists they can edit it. Once created reservations can not be destroyed.
* New Photos tab in the Group Admin
	* Admins can upload photos. Photos can have captions and alternative text. Photos can also be linked to the member who posted it as well as the event it references.
* TimeZone Behaviors
	* Added JS code that will report the user's timezone to the server so it can be stored in the current session and used to format future dates and times to the user's timezone.
	* Added a virtual properties to `event` for `starts_at_date` and `starts_at_time`. This allows us to present a form for event where those values are handled differently but merged on submission to store the final `starts_at` value.
	* From a user standpoint, all events are edited / shown in their timezone but are stored in UTC.
	* All db schemas have been updated so that timestamps are stored WITH timezone data.
	* Groups now have stored properties for timezone and location (string). Timezone will be used as a fallback when presenting time info and we do not know the user's timezone. Location is a simple string and for now will be used for display only.

### CHANGED

* Member CRUD design changes.
* Changed the behavior of the URL redirect when creating a new group to keep in mind the environment and port selection. [Fixes #169901641]
* Fixed broken tests caused by the newer invite_code requirement and marketing copy changes.
* Renamed the current Reset Password behavior to the more descriptive Change Password label, in both UI and code use.
* Updated password hashing rules to be much lighter during development and testing to help speed up tests.
* No longer using a Sandbox DB connection with tests. This requires you to reset the database before each test.
* We now generate password for all members in the seed data during development.
* When a new owner is claiming a group their email is now carried over and used for the `public_email` of the group. It can be changed in the future if they like, but it is thought it would be best to have an email in that field asap as we use it all over the site.
* Update seed data to better create starts_at dates that match the expected user experience and timezone behavior.
* Fix seed data issue where it sometimes used a blank movie title or first name.
* Fix bug where web server attempted to load subdomain route when answering an IP-based request.
* Did a few font adjustments for the public group site. More will come but it's nice not to have something other than the browser default.
* We now prefer `https` in production when redirecting after creating a group.
* Front page marketing copy has been update in preparation for Public Alpha
* Removed the requirement to provide an invite code when making a new group.


### REMOVED

* Removed the concept of Member.role which was one of three string values ("owner", "organizer" and "member") in favor of new flags, `Member.is_owner` and `Member.`is_admin`.

## 0.2 -- November 10, 2019

Note all changes were not recorded properly so expect some missing items from this list. In the `RELEASE_NOTES` I have tried to record all user behavior at the time of release.

* Adds new InviteRequest form on public site.
* Adds Admin browser for InviteRequests.
	* Can Accept or Decline invites
	* When accepted a member is created with temp password.
	* Member is flagged to edit password upon next visit.
* New member flag "needs new password" that forces new passwords.
* Members can now reset their password.
* After becoming the first member of a group, you are now automatically signed in.
* You must now be signed in to a group site to view its member directory.
* Created claim group form, in which a person creates the first member of a group, the owner.
* Created basic `group` layout and css files.
* Added `recase` for string title-ization.
* Adds a static group site layout (to be integrated)
* Adds a new home page layout and some starter sample copy.
* Updated the Welcome copy to be parsed from a local Markdown file.
	* Adds dependency for `earmark`.
* Put a few TODO items on the README to be expanded in the future.
* A user can now create a new group.
* New Group Form is styled.
* Preliminary notes on building a release added to the Guides.
* Renamed `PageController` to `WelcomeController`
* Pages using the `layout/app.html.eex` now require a custom page title provided by their `*View` modules.
* New static design on single page pitch.

## 0.1

* An initial test deployment of our WIP application.
* Working behaviors will be documented in a future release.
