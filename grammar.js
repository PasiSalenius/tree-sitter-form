module.exports = grammar({
    name: 'form',
  
    extras: $ => [],
  
    rules: {
      source_file: $ => optional(seq($.key_value, repeat(seq('&', $.key_value)))),
  
      key_value: $ =>
        seq($.key, optional(seq('=', $.value))),
  
      key: _ => /[^ =&]+/,
      value: _ => /[^ &]*/,
    }
  });
  