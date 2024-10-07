const std = @import("std");

    const install_site = b.addInstallDirectory(.{
        .source_dir = b.path("src/www"),
        .install_dir = .prefix,
        .install_subdir = "",
    });
    b.getInstallStep().dependOn(&install_site.step);
}
