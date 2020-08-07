package com.baowei.admin.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * Created with IntelliJ IDEA.
 *
 * @version V1.0
 * @description:
 * @author: specter
 * @date: 2019-04-10
 * @time: 10:31
 */
@Controller
@RequestMapping(value = "/api/v1/file")
public class FileController {

	@RequestMapping(value = "upload", method = RequestMethod.POST)
	@ResponseBody
	public String fileUpload( HttpServletRequest request) throws IOException {
		MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request);
		List<MultipartFile> files = ((MultipartHttpServletRequest) request).getFiles("file");
		String name = params.getParameter("name");
		System.out.println("name:" + name);
		String id = params.getParameter("id");
		System.out.println("id:" + id);
		MultipartFile file = null;
		BufferedOutputStream stream = null;
		for (int i = 0; i < files.size(); ++i) {
			file = files.get(i);
			if (!file.isEmpty()) {
				try {
					byte[] bytes = file.getBytes();
					stream = new BufferedOutputStream(new FileOutputStream(new File(file.getOriginalFilename())));
					stream.write(bytes);
					stream.close();
				} catch (Exception e) {
					stream = null;
					return "You failed to upload ";
				}
			} else {
				return "You failed to upload  because the file was empty.";
			}
		}
		return "upload successful";

	}
}
