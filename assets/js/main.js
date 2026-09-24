/*
 * Universal Massive File System for amassivus datacenter suite
 * Copyright (C) 2026 UMFS Authors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navigation = document.getElementById("mainNav");
    bootstrap.Collapse.getOrCreateInstance(navigation).hide();
  });
});
