function roll_over(pic_name,pic_src)
{
	if(document.images){
		document[pic_name].src=pic_src.src;
	}

}

function f_expand_contract(p_id) {
	
	the_id = eval(p_id);
	the_img = eval("expander_"+p_id);
	
	if (the_id.style.display=='none') {
		the_id.style.display = 'block';
		the_img.src = "images/ip_i_arrow_e.gif";
	} else {
		the_id.style.display = 'none';
		the_img.src = "images/ip_i_arrow.gif";
	}

}

if(document.images)
{
	var i_screenshot_ss_1 = new Image();
	i_screenshot_ss_1.src = "images/screenshot_ss_1.jpg";
	var i_screenshot_ss_2 = new Image();
	i_screenshot_ss_2.src = "images/screenshot_ss_2.jpg";
	var i_screenshot_ss_3 = new Image();
	i_screenshot_ss_3.src = "images/screenshot_ss_3.jpg";
	var i_screenshot_ss_4 = new Image();
	i_screenshot_ss_4.src = "images/screenshot_ss_4.jpg";
	var i_screenshot_ss_5 = new Image();
	i_screenshot_ss_5.src = "images/screenshot_ss_5.jpg";
	var i_screenshot_ss_6 = new Image();
	i_screenshot_ss_6.src = "images/screenshot_ss_6.jpg";
	
	var i_children_h = new Image();
	i_children_h.src = "images/ip_t_children_h.gif";
	var i_children = new Image();
	i_children.src = "images/ip_t_children.gif";
	
	var i_crime_h = new Image();
	i_crime_h.src = "images/ip_t_crime_h.gif";
	var i_crime = new Image();
	i_crime.src = "images/ip_t_crime.gif";
	
	var i_fiction_h = new Image();
	i_fiction_h.src = "images/ip_t_fiction_h.gif";
	var i_fiction = new Image();
	i_fiction.src = "images/ip_t_fiction.gif";
	
	var i_horror_h = new Image();
	i_horror_h.src = "images/ip_t_horror_h.gif";
	var i_horror = new Image();
	i_horror.src = "images/ip_t_horror.gif";
	
	var i_humour_h = new Image();
	i_humour_h.src = "images/ip_t_humour_h.gif";
	var i_humour = new Image();
	i_humour.src = "images/ip_t_humour.gif";
	
	var i_nonfiction_h = new Image();
	i_nonfiction_h.src = "images/ip_t_nonfiction_h.gif";
	var i_nonfiction = new Image();
	i_nonfiction.src = "images/ip_t_nonfiction.gif";
	
	var i_romance_h = new Image();
	i_romance_h.src = "images/ip_t_romance_h.gif";
	var i_romance = new Image();
	i_romance.src = "images/ip_t_romance.gif";
	
	var i_scifi_h = new Image();
	i_scifi_h.src = "images/ip_t_scifi_h.gif";
	var i_scifi = new Image();
	i_scifi.src = "images/ip_t_scifi.gif";
	
	var i_interactive_h = new Image();
	i_interactive_h.src = "images/ip_t_interactive_h.gif";
	var i_interactive = new Image();
	i_interactive.src = "images/ip_t_interactive.gif";
	
	var i_home_h = new Image();
	i_home_h.src = "images/ip_t_home_h.gif";
	var i_home = new Image();
	i_home.src = "images/ip_t_home.gif";
}
