# javascript_theory

# DOM Event

hành động nào đố lọt vào sự kiện để cho sự kiện diễn ra 

https://www.w3schools.com/jsref/dom_obj_event.asp

# HTML DOM EVENT
Event                 || Occurs When	                                                      || Belongs To
abort                  quá trình tải phương tiện bị hủy bỏ	                                   UiEvent,Event
afterprint	           Một trang đã bắt đầu in	                                               Event
animationend	         Hoạt hình CSS đã hoàn thành	                                           AnimationEvent
animationiteration	   Hoạt ảnh CSS được lặp lại	                                             AnimationEvent
animationstart	       Hoạt ảnh CSS đã bắt đầu                                                 AnimationEvent
beforeprint	           Một trang sắp được in                                                   Event
beforeunload	         Trước khi tài liệu chuẩn bị được dỡ xuống(tải lại)	                     UiEvent, Event
blur	                 một phần tử mất trọng tâm.                                              FocusEvent
canplay	               Trình duyệt có thể bắt đầu phát lại phương tiện (đã đệm đủ để bắt đầu). Event
canplaythrough	       Trình duyệt có thể phát qua phương tiện mà không cần dừng để lưu vào bộ đệm	 Event
change	               Nội dung của phần tử biểu mẫu đã thay đổi	                             Event
click	                 Một phần tử được nhấp vào	                                             MouseEvent
contextmenu	           Một phần tử được nhấp chuột phải để mở menu ngữ cảnh	                   MouseEvent
copy	                 Nội dung của một phần tử được sao chép	                                 ClipboardEvent
cut	                   Nội dung của phần tử được cắt                                         	 ClipboardEvent
dblclick	             Một phần tử được nhấp đúp	                                             MouseEvent
drag	                 Một phần tử đanng được kéo	                                             DragEvent
dragend	               Việc kéo một phần tử đã kết thúc	                                       DragEvent
dragenter	             Phần tử được kéo đi vào mục tiêu thả	                                   DragEvent
dragleave	             Phần tử được kéo rời khỏi mục tiêu thả	                                 DragEvent
dragover	             A dragged element is over the drop target	                             DragEvent
dragstart	             Dragging of an element has started	                                     DragEvent
drop	                 A dragged element is dropped on the target	                             DragEvent
durationchange	       The duration of a media is changed	                                     Event
ended	                 A media has reach the end ("thanks for listening")	                     Event
error	                 An error has occurred while loading a file	                             ProgressEvent, UiEvent, Event
focus	                 An element gets focus	                                                 FocusEvent
focusin	               An element is about to get focus	                                       FocusEvent
focusout	             An element is about to lose focus	                                     FocusEvent
fullscreenchange	     An element is displayed in fullscreen mode	                             Event
fullscreenerror	       An element can not be displayed in fullscreen mode	                     Event
hashchange	           There has been changes to the anchor part of a URL	                     HashChangeEvent
input	                 An element gets user input	                                             InputEvent, Event
invalid	               An element is invalid	                                                 Event
keydown	               A key is down	                                                         KeyboardEvent
keypress	             A key is pressed	                                                       KeyboardEvent
keyup	                 A key is released	                                                     KeyboardEvent
load	                 An object has loaded	                                                   UiEvent, Event
loadeddata	           Media data is loaded	                                                   Event
loadedmetadata	       Meta data (like dimensions and duration) are loaded	                   Event
loadstart	             The browser starts looking for the specified media	                     ProgressEvent
message	               A message is received through the event source	                         Event
mousedown            	The mouse button is pressed over an element	                             MouseEvent
mouseenter	           The pointer is moved onto an element	                                   MouseEvent
mouseleave	           The pointer is moved out of an element	                                 MouseEvent
mousemove	             The pointer is moved over an element	                                   MouseEvent
mouseover	             The pointer is moved onto an element	                                   MouseEvent
mouseout	             The pointer is moved out of an element	                                 MouseEvent
mouseup	               A user releases a mouse button over an element	                         MouseEvent
mousewheel	           Deprecated. Use the wheel event instead	                               WheelEvent
offline	               The browser starts working offline	                                     Event
online	               The browser starts working online	                                     Event
open	                 A connection with the event source is opened	                           Event
pagehide	             User navigates away from a webpage	                                     PageTransitionEvent
pageshow	             User navigates to a webpage	                                           PageTransitionEvent
paste	                 Some content is pasted in an element	                                   ClipboardEvent
pause	                 A media is paused	                                                     Event
play	                 The media has started or is no longer paused	                           Event
playing	               The media is playing after beeing paused or buffered	                   Event
popstate	             The window's history changes	                                           PopStateEvent
progress	             The browser is downloading media data	                                 Event
ratechange	           The playing speed of a media is changed	                               Event
resize	               The document view is resized	                                           UiEvent, Event
reset	                 A form is reset	                                                       Event
scroll	               An scrollbar is being scrolled	                                         UiEvent, Event
search	               Something is written in a search field	                                 Event
seeked	               Skipping to a media position is finished	                               Event
seeking	               Skipping to a media position is started	                               Event
select	               User selects some text	                                                  UiEvent, Event
show	                 A <menu> element is shown as a context menu	                             Event
stalled	               The browser is trying to get unavailable media data	                   Event
storage	               A Web Storage area is updated	                                         StorageEvent
submit	               A form is submitted	                                                         Event
suspend	               The browser is intentionally not getting media data	                            Event
timeupdate	           Vị trí phát đã thay đổi (người dùng di chuyển đến một điểm khác trên phương tiện)	Event
toggle	               Người dùng mở hoặc đóng phần tử Chi tiết                                    	Event
touchcancel	           touch bị gián đoạn	                                                            TouchEvent
touchend	             Một ngón tay được lấy ra khỏi màn hình cảm ứng	                                            TouchEvent
touchmove	             Một ngón tay được kéo trên màn hình	                                              TouchEvent
touchstart	           A finger is placed on a touch screen                                               	TouchEvent
transitionend	         A CSS transition has completed	                                                      TransitionEvent
unload	               A page has unloaded	                                                                 UiEvent, Event
volumechange	         The volume of a media is changed (includes muting)                                    Event
waiting	               A media is paused but is expected to resume (e.g. buffering)	                         Event
wheel	                 The mouse wheel rolls up or down over an element	                                     WheelEvent
